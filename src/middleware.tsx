import { createClient, OAuthStrategy } from "@wix/sdk";
import { NextRequest, NextResponse } from "next/server"


async function Middleware(request:NextRequest) { 
    const Cookies = request.cookies;
    const res = NextResponse.next();
    if(Cookies.get("refreshToken")) {
        return res
    }
    const wixClient = createClient({
        auth:OAuthStrategy({clientId:process.env.NEXT_PUBLIC_WIX_CLIENT_ID!})
    });

    const tokens = await wixClient.auth.generateVisitorTokens();
    res.cookies.set("refreshToken",JSON.stringify(tokens.refreshToken), {
        maxAge: 60 * 24 * 30,
    })
  return res
}

export default Middleware