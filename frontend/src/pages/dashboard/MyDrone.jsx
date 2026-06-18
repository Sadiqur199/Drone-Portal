import { useDashboardData } from "./useDashboardData";

const InfoRow = ({ label, value, green }) => (
  <div className="flex items-center justify-between border-b border-gray-200 py-4 last:border-0">
    <span className="text-[15px] text-[#9ca3af]">{label}</span>
    <span
      className={`text-[15px] font-semibold ${
        green ? "text-[#2f8b57]" : "text-[#111827]"
      }`}
    >
      {value}
    </span>
  </div>
);

const Card = ({ title, children }) => (
  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <div className="px-8 py-6">
      <h3 className="mb-6 text-[18px] font-bold uppercase tracking-wide text-[#334155]">
        {title}
      </h3>

      {children}
    </div>
  </div>
);

const MyDrone = () => {
  const { accessories, documents, drone, technicalSpecifications } =
    useDashboardData();

  const aircraftDetails = [
    ["Model", drone.model],
    ["Serial number", drone.serialNumber],
    ["Purchase date", drone.purchaseDate],
    ["Purchased from", drone.purchasedFrom],
    ["Warranty expires", drone.warrantyExpires, true],
    ["Firmware version", drone.firmwareVersion],
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-8">
      <div className="mb-8">
        <p className="text-sm text-gray-400">Registered equipment</p>
        <h1 className="mt-1 text-4xl font-bold text-[#111827]">My Drone</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <Card title="Aircraft Details">
            {aircraftDetails.map(([label, value, green]) => (
              <InfoRow key={label} label={label} value={value} green={green} />
            ))}
          </Card>

          <Card title="Technical Specifications">
            {technicalSpecifications.map(([label, value]) => (
              <InfoRow key={label} label={label} value={value} />
            ))}
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Included Accessories">
            {accessories.map(([label, value]) => (
              <InfoRow key={label} label={label} value={value} />
            ))}
          </Card>

          <Card title="Documents">
            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.name}
                  className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0"
                >
                  <div>
                    <h4 className="font-medium text-[#111827]">{doc.name}</h4>
                    <p className="text-sm text-gray-400">{doc.type}</p>
                  </div>

                  {doc.url || doc.contentUrl || doc.file_url ? (
                    <a
                      href={doc.url || doc.contentUrl || doc.file_url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-500 hover:bg-gray-200"
                    >
                      Download
                    </a>
                  ) : (
                    <button className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-500 hover:bg-gray-200">
                      Download
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyDrone;
