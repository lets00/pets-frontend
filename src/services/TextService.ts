export const TextService = {
  limitarTexto(texto: string, tamanhoMaximo: number): string {
    return texto.length < tamanhoMaximo
      ? texto
      : texto.slice(0, tamanhoMaximo) + "...";
  },
};
