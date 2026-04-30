import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

const ALLOWED = new Set([
  'cs50x.pdf', 'uees-talks.pdf', 'taller-pc.pdf',
  'biorobotics.pdf', 'carta-recomendacion.pdf',
]);

export async function GET(request: NextRequest) {
  const file = request.nextUrl.searchParams.get('file') ?? '';

  // Validar que el archivo es uno de los permitidos (seguridad: no path traversal)
  if (!ALLOWED.has(file)) {
    return new NextResponse('Not found', { status: 404 });
  }

  try {
    const pdfPath = path.join(process.cwd(), 'public', 'certs', file);
    const data    = await readFile(pdfPath);

    return new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type':        'application/pdf',
        'Content-Disposition': 'inline',
        'Cache-Control':       'public, max-age=604800',
        // Permitir embebido en iframe del mismo origen
        'X-Frame-Options':     'SAMEORIGIN',
      },
    });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}
