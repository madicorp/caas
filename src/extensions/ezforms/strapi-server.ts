export default (plugin: any) => {
  plugin.services.formatData = () => ({
    formatData(data: any): string {
      return `
        <h1>Formulaire de demande de devis</h1>
        <p>Nom: ${data.nom}</p>
        <p>Prénom: ${data.prenom}</p>
        <p>Profession: ${data.profession}</p>
        <p>Adresse: ${data.adresse}</p>
        <p>Email: ${data.email}</p>
        <p>Téléphone: ${data.telephone}</p>
        <p>Zone: ${data.zone}</p>
        <p>Surface: ${data.surface}</p>
        <p>Ouvrage: ${data.ouvrage}</p>
        <p>Niveau: ${data.niveau}</p>
        <p>Precision: ${data.precision}</p>
      `
    }
  });

  return plugin;
};
