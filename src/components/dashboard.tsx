const url =
  "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_di03?format=JSON&unit=EUR&sex=T&indic_il=MEI_E&age=Y18-64&lang=en";

export default async function Dashboard({
  dataFromServer,
}: {
  dataFromServer: unknown;
}) {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
