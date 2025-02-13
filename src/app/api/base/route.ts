'use server';
import { NextResponse } from 'next/server';
import { socials } from '../data/socials';

export async function GET() {
  return NextResponse.json({ socials });
}
