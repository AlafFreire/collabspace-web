function maskTelephone(telephone: string): string {
  const telepohoneNumber = telephone.replace(/\D/g, "");

  if (telepohoneNumber.length !== 11) return telepohoneNumber;

  const telephoneFormated = `(${telepohoneNumber.substring(
    0,
    2,
  )}) ${telepohoneNumber.substring(2, 3)}${telepohoneNumber.substring(
    3,
    7,
  )}-${telepohoneNumber.substring(7)}`;

  return telephoneFormated;
}

function maskCep(cep: string): string {
  const cepNumber = cep.replace(/\D/g, "");

  if (cepNumber.length !== 8) return cepNumber;

  const cepFormated = `${cepNumber.substring(0, 5)}-${cepNumber.substring(5)}`;

  return cepFormated;
}

export { maskCep, maskTelephone };
