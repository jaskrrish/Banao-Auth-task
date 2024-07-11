import { connect } from "@/db/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendForgotPasswordMail } from "@/helpers/sendForgotPasswordMail";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    console.log(reqBody);

    //find user by email
    const user = await User.findOne({ email });

    // check if user exists or not
    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    }
    console.log("user Found");
    //hash password
    const forgotPasswordToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const forgotPasswordTokenExpiry = new Date(Date.now() + 3600000);

    console.log(forgotPasswordToken, forgotPasswordTokenExpiry);

    user.forgotPasswordToken = forgotPasswordToken;
    user.forgotPasswordTokenExpiry = forgotPasswordTokenExpiry;
    await user.save();

    console.log("User Saved");

    const emailResponse = await sendForgotPasswordMail(
      email,
      forgotPasswordToken
    );

    if (!emailResponse.success) {
      return Response.json(
        {
          success: false,
          message: emailResponse.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Forget Password Token Created Successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
