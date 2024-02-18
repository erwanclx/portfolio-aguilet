import { PrimaryButton } from "../button/button";

export default function Form() {
  return (
    <form
      action="https://formspree.io/f/xgegkrvr"
      method="POST"
      className="flex flex-col gap-4"
    >
      <h3 className="text-blue-500">Me contacter</h3>
      <div className="flex flex-col gap-2">
        <select
          name="reason"
          id="reason"
          required
          className="border-2 border-blue-500 p-2 bg-white"
        >
          <option value="Projet">Projet</option>
          <option value="Question">Question</option>
          <option value="Collaboration">Données personnelles</option>
          <option value="Autre">Autre</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="border-2 border-blue-500 p-2"
          placeholder="Arthur Guilet"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="border-2 border-blue-500 p-2"
          placeholder="contact@arthur-guilet.fr"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          required
          className="border-2 border-blue-500 p-2"
          placeholder="Bonjour, je voudrais vous parler de mon projet..."
        ></textarea>
      </div>
      <PrimaryButton type="submit">Envoyer</PrimaryButton>

      <div className="flex flex-col gap-2">
        {/* accordeon */}
        <p className="text-xs">*Champs obligatoires.</p>
        <details>
          <summary>Données personnelles</summary>
          <p className="text-sm">
            Les informations recueillies sur ce formulaire sont enregistrées
            dans un fichier informatisé par moi-même pour la gestion des
            demandes de contact. Elles sont conservées pendant 3 ans et sont
            destinées à moi-même en tant que seul destinataire. Conformément à
            la loi "informatique et libertés", vous pouvez exercer votre droit
            d'accès aux données vous concernant et les faire rectifier en me
            contactant.
          </p>
        </details>
      </div>
    </form>
  );
}
