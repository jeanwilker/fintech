export type IVenda = {
    id: string;
    nome: string;
    preco: number;
    status: 'pago' | 'processando' | 'falha';
    pagamento: 'cartao' | 'boleto' | 'pix';
    parcelas: number | null;
    data: string;
  };