let nota = "Aprovada"

switch (nota.toLowerCase()) {
  case "aprovada":
    console.log("Você foi aprovado");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera");
    break;
    case "reprovado":
      console.log("Você foi reprovado");
      break;
  default:
    console.log("não se apliica");
    break;
} 