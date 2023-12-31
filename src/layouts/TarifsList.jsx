import { MentionLegales, TarifsCard } from "../components/TarifsCard.jsx";

export const TarifsList = (categorie) => {
  console.log(categorie.data.data);


  return (
    <>
      <table className="tarifs__table">
        <thead className="tarifs__table-header">
          <tr className="tarifs__table-header">
            <td className="tarifs__table-item tarifs__table-item-categories">
              Catégories
            </td>
            <td className="tarifs__table-item">Détails</td>
            <td className="tarifs__table-item">Nuit BS</td>
            <td className="tarifs__table-item">Semaine BS</td>
            <td className="tarifs__table-item">Nuit HS</td>
            <td className="tarifs__table-item">Semaine HS</td>
          </tr>
        </thead>
        <tbody className="tarifs__list">
          {categorie?.data &&
            categorie?.data?.tarifs.map((tarif, i) => (
              <tr key={i} className="tarifs__table-row">
                <TarifsCard data={tarif} />
              </tr>
            ))}
        </tbody>
        <tfoot>
          {categorie?.data &&
            categorie?.data?.mentions_legales.map((mentions_legales, i) => (
              <tr key={i} className="tarifs__table-row">
                <MentionLegales data={mentions_legales} />
              </tr>
            ))}
        </tfoot>
      </table>
    </>
  );
};
