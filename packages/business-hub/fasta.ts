import { FastaResponse } from 'business-hub/types/Fasta';
import { request } from './request';

export async function fasta(stadaId: string): Promise<FastaResponse> {
  const r = await request.get<FastaResponse>('/fasta/v2/stations/' + stadaId);

  return r.data;
}
