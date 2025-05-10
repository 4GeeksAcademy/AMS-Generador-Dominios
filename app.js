function generarDominios(pronouns, adjectives, nouns, extensions, domainHacks) {
    const combinaciones = [];
    // Generar combinaciones de pronombres, adjetivos y sustantivos
    for (const pronoun of pronouns) {
      for (const adj of adjectives) {
        for (const noun of nouns) {
          for (const ext of extensions) {
            combinaciones.push(`${pronoun}${adj}${noun}${ext}`);
          }
          for (const hack of domainHacks) {
             combinaciones.push(`${pronoun}${adj}${noun}${hack.domain}`);
          }
        }
      }
    }
    return combinaciones;
  }
  // Ejemplo de uso
  
  const pronouns = ['the', 'our'];
  const adjectives = ['great', 'big'];
  const nouns = ['jogger', 'racoon'];
  const extensions = ['.com', '.net', '.us', '.io'];
  const domainHacks = [{ part: 'es', domain: '.es'},{ part: 'co', domain: '.co'}];
  
  const dominiosGenerados = generarDominios(pronouns, adjectives, nouns, extensions, domainHacks);
  
  dominiosGenerados.forEach(dominio => console.log(dominio));
