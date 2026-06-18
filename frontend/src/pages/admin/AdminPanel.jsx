import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Boxes,
  ClipboardList,
  LogOut,
  Plane,
  Save,
  Share2,
  UploadCloud,
  Video,
  Wrench,
} from "lucide-react";
import API from "../../api/axios";
import { getAuthenticatedAdmin, logoutAdmin } from "./adminAuth";
import { getDashboardData } from "../dashboard/data";

const draftKey = "dronePortalAdminDrafts";
const publishedProfilesKey = "dronePortalAdminPublishedProfiles";

const profileJsonEditors = [
  {
    key: "specs",
    label: "Specs JSON",
    sampleKey: "specs",
  },
  {
    key: "dashboard_stats",
    label: "Dashboard stats JSON",
    sampleKey: "dashboardStats",
  },
  {
    key: "checklist_items",
    label: "Checklist items JSON",
    sampleKey: "checklistItems",
  },
  {
    key: "component_health",
    label: "Component health JSON",
    sampleKey: "componentHealth",
  },
  {
    key: "service_history",
    label: "Service history JSON",
    sampleKey: "serviceHistory",
  },
  {
    key: "accessories",
    label: "Accessories JSON",
    sampleKey: "accessories",
  },
  {
    key: "technical_specifications",
    label: "Technical specifications JSON",
    sampleKey: "technicalSpecifications",
  },
  {
    key: "documents",
    label: "Documents JSON",
    sampleKey: "documents",
  },
  {
    key: "tutorial_videos",
    label: "Tutorial videos JSON",
    sampleKey: "tutorialVideos",
  },
  {
    key: "troubleshoot_issues",
    label: "Troubleshoot issues JSON",
    sampleKey: "troubleshootIssues",
  },
  {
    key: "part_sections",
    label: "Parts sections JSON",
    sampleKey: "partSections",
  },
  {
    key: "support_categories",
    label: "Support categories JSON",
    sampleKey: "supportCategories",
  },
];

const sections = [
  {
    id: "drone_profile",
    label: "My Drone",
    icon: Plane,
    endpoint: "/admin/drone-profile",
    fields: [
      ["model_name", "Drone model", "DJI Agras T50"],
      ["model_code", "Model code", "T50"],
      ["serial_number", "Serial number", "7741-WA-T50"],
      ["registration_number", "Registration", "WA-AGT-5021"],
      ["customer_name", "Customer name", "Judy Zhu"],
      ["customer_initials", "Customer initials", "JZ"],
      ["company_name", "Company", "Australia Agritech"],
      ["location", "Location", "Perth, WA"],
      ["purchase_date", "Purchase date", "14 January 2025"],
      ["purchased_from", "Purchased from", "Australia Agritech, Perth WA"],
      ["warranty_expires", "Warranty expires", "14 January 2027"],
      ["warranty_status", "Warranty status", "Active"],
      ["warranty_remaining", "Warranty remaining", "622 days remaining"],
      ["warranty_period", "Warranty period", "14 Jan 2025 - 14 Jan 2027"],
      ["firmware_version", "Firmware version", "v10.01.0300"],
      ["firmware_status", "Firmware status", "Up to date"],
      ["next_service_due", "Next service due", "Sep 2025"],
      ["last_serviced", "Last serviced", "3 Mar 2025"],
      ["flight_hours", "Flight hours", "128.4 hrs"],
      ["battery_sets", "Battery sets", "4 packs"],
      ["maintenance_alert", "Maintenance alert", "Propellers due for replacement"],
      ["image_url", "Drone image URL", "/drone.png"],
    ],
    jsonEditors: profileJsonEditors,
  },
  {
    id: "tutorials",
    label: "Tutorials",
    icon: Video,
    endpoint: "/admin/tutorials",
    fields: [
      ["title", "Video title", "DJI Agras T50 First Flight Setup"],
      ["category", "Category", "Getting Started"],
      ["description", "Description", "Unboxing, calibration and first mission"],
      ["duration", "Duration", "4:32"],
      ["video_url", "YouTube embed URL", "https://www.youtube.com/embed/..."],
      ["thumbnail", "Thumbnail URL", "/tutorials/t50-1.jpg"],
    ],
    itemsLabel: "Tutorial list JSON",
    sampleItems:
      '[{"title":"Setup guide","category":"Getting Started","description":"Controller pairing","duration":"5:14","videoUrl":"https://www.youtube.com/embed/..."}]',
  },
  {
    id: "troubleshoot",
    label: "Troubleshoot",
    icon: Wrench,
    endpoint: "/admin/troubleshoot",
    fields: [
      ["title", "Issue title", "T50 will not power on"],
      ["icon", "Icon name", "Power"],
      ["description", "Description", "Check battery seating and aircraft startup sequence."],
      ["video", "Video URL", "https://www.youtube.com/embed/..."],
    ],
    itemsLabel: "Troubleshooting steps JSON",
    sampleItems:
      '["Confirm both battery locks are engaged","Try a fully charged battery set","Restart the controller"]',
  },
  {
    id: "parts",
    label: "Parts",
    icon: Boxes,
    endpoint: "/admin/parts",
    fields: [
      ["section_title", "Parts section", "Spray System"],
      ["top", "Hotspot top", "58%"],
      ["left", "Hotspot left", "48%"],
      ["part_name", "Part name", "Spray Pump"],
      ["price", "Price", "295"],
      ["stock", "Stock", "true"],
    ],
    itemsLabel: "Parts JSON",
    sampleItems:
      '[{"name":"Spray Pump","price":295,"stock":true},{"name":"Nozzle Kit","price":64,"stock":true}]',
  },
  {
    id: "guides",
    label: "Guides",
    icon: BookOpen,
    endpoint: "/admin/guides",
    fields: [
      ["title", "Guide title", "Pre-season setup"],
      ["summary", "Short summary", "Prepare batteries, tanks, nozzles, and route maps."],
      ["file_url", "Guide file URL", "/guides/pre-season.pdf"],
    ],
    itemsLabel: "Guide list JSON",
    sampleItems:
      '[["Pre-season setup","Prepare batteries, tanks, nozzles, and route maps."],["Storage guide","Clean down and battery storage steps."]]',
  },
  {
    id: "checklists",
    label: "Checklists",
    icon: ClipboardList,
    endpoint: "/admin/checklists",
    fields: [
      ["task", "Task", "Flush spray system with clean water"],
      ["status", "Status", "Done"],
      ["badge_class", "Badge style", "bg-green-100 text-green-700"],
    ],
    itemsLabel: "Checklist JSON",
    sampleItems:
      '[["Flush spray system with clean water","Done","bg-green-100 text-green-700"],["Inspect nozzle wear","This Week","bg-orange-100 text-orange-700"]]',
  },
  {
    id: "shared",
    label: "Shared",
    icon: Share2,
    endpoint: "/admin/shared-content",
    fields: [
      ["title", "Shared title", "Warranty Terms & Conditions"],
      ["description", "Description", "Full policy document"],
      ["content_url", "File/video URL", "/documents/warranty.pdf"],
    ],
    itemsLabel: "Shared content JSON",
    sampleItems:
      '[{"title":"Warranty Terms & Conditions","description":"Full policy document","contentUrl":"/documents/warranty.pdf"}]',
  },
];

const emptyFormFor = (section) =>
  section.fields.reduce((values, [name]) => ({ ...values, [name]: "" }), {});

const draftIdFor = (sectionId, droneId) => `${sectionId}:${droneId}`;

const stringifyJson = (value) => JSON.stringify(value ?? [], null, 2);

const defaultProfileForm = (droneId) => {
  const profile = getDashboardData(droneId);

  return {
    model_name: profile.drone.model,
    model_code: profile.drone.shortModel,
    serial_number: profile.drone.serialNumber,
    registration_number: profile.drone.registration,
    customer_name: profile.user.name,
    customer_initials: profile.user.initials,
    company_name: profile.user.company,
    location: profile.user.location,
    purchase_date: profile.drone.purchaseDate,
    purchased_from: profile.drone.purchasedFrom,
    warranty_expires: profile.drone.warrantyExpires,
    warranty_status: profile.drone.warrantyStatus,
    warranty_remaining: profile.drone.warrantyRemaining,
    warranty_period: profile.warrantyPeriod,
    firmware_version: profile.drone.firmwareVersion,
    firmware_status: profile.drone.firmwareStatus,
    next_service_due: profile.drone.nextServiceDue,
    last_serviced: profile.drone.lastServiced,
    flight_hours: profile.drone.flightHours,
    battery_sets: profile.drone.batterySets,
    maintenance_alert: profile.maintenanceAlert,
    image_url: profile.drone.image,
  };
};

const defaultJsonFor = (section, droneId) => {
  if (!section.jsonEditors) {
    return {};
  }

  const profile = getDashboardData(droneId);
  return section.jsonEditors.reduce(
    (values, editor) => ({
      ...values,
      [editor.key]: stringifyJson(profile[editor.sampleKey]),
    }),
    {}
  );
};

const initialFormFor = (section, droneId) => {
  if (section.id === "drone_profile") {
    return defaultProfileForm(droneId);
  }

  return emptyFormFor(section);
};

const initialItemsFor = (section, droneId) =>
  section.jsonEditors ? defaultJsonFor(section, droneId) : section.sampleItems;

const readDrafts = () => {
  try {
    return JSON.parse(localStorage.getItem(draftKey)) || {};
  } catch {
    return {};
  }
};

const readPublishedProfiles = () => {
  try {
    return JSON.parse(localStorage.getItem(publishedProfilesKey)) || {};
  } catch {
    return {};
  }
};

const parseItems = (section, itemsJson) => {
  if (section.jsonEditors) {
    return section.jsonEditors.reduce((items, editor) => {
      const value = itemsJson[editor.key]?.trim();
      return {
        ...items,
        [editor.key]: value ? JSON.parse(value) : [],
      };
    }, {});
  }

  return itemsJson.trim() ? JSON.parse(itemsJson) : [];
};

const buildLocalProfile = (droneId, fields, items) => {
  const fallback = getDashboardData(droneId);

  return {
    ...fallback,
    id: droneId,
    user: {
      name: fields.customer_name,
      initials: fields.customer_initials,
      company: fields.company_name,
      location: fields.location,
    },
    drone: {
      model: fields.model_name,
      shortModel: fields.model_code,
      serialNumber: fields.serial_number,
      registration: fields.registration_number,
      purchaseDate: fields.purchase_date,
      purchasedFrom: fields.purchased_from,
      warrantyExpires: fields.warranty_expires,
      warrantyStatus: fields.warranty_status,
      warrantyRemaining: fields.warranty_remaining,
      firmwareVersion: fields.firmware_version,
      firmwareStatus: fields.firmware_status,
      nextServiceDue: fields.next_service_due,
      lastServiced: fields.last_serviced,
      flightHours: fields.flight_hours,
      batterySets: fields.battery_sets,
      image: fields.image_url || "/drone.png",
    },
    specs: items.specs,
    dashboardStats: items.dashboard_stats,
    checklistItems: items.checklist_items,
    componentHealth: items.component_health,
    maintenanceAlert: fields.maintenance_alert,
    warrantyPeriod: fields.warranty_period,
    serviceHistory: items.service_history,
    accessories: items.accessories,
    technicalSpecifications: items.technical_specifications,
    documents: items.documents,
    tutorialVideos: items.tutorial_videos,
    troubleshootIssues: items.troubleshoot_issues,
    partSections: items.part_sections,
    supportCategories: items.support_categories,
  };
};

const AdminPanel = () => {
  const navigate = useNavigate();
  const admin = getAuthenticatedAdmin();
  const [activeId, setActiveId] = useState(sections[0].id);
  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeId) || sections[0],
    [activeId]
  );
  const initialDraft = readDrafts()[draftIdFor(activeSection.id, "t50")];
  const [droneId, setDroneId] = useState(initialDraft?.drone_id || "t50");
  const [form, setForm] = useState(
    initialDraft?.fields || initialFormFor(activeSection, "t50")
  );
  const [itemsJson, setItemsJson] = useState(
    initialDraft?.itemsJson || initialItemsFor(activeSection, "t50")
  );
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  const changeSection = (sectionId) => {
    const nextSection = sections.find((section) => section.id === sectionId) || sections[0];
    const nextDraft = readDrafts()[draftIdFor(nextSection.id, droneId)];
    setActiveId(sectionId);
    setForm(nextDraft?.fields || initialFormFor(nextSection, droneId));
    setItemsJson(nextDraft?.itemsJson || initialItemsFor(nextSection, droneId));
    setDroneId(nextDraft?.drone_id || droneId);
    setMessage("");
    setError("");
  };

  const changeDrone = (nextDroneId) => {
    const nextDraft = readDrafts()[draftIdFor(activeSection.id, nextDroneId)];
    setDroneId(nextDroneId);
    setForm(nextDraft?.fields || initialFormFor(activeSection, nextDroneId));
    setItemsJson(nextDraft?.itemsJson || initialItemsFor(activeSection, nextDroneId));
    setMessage("");
    setError("");
  };

  const payload = () => {
    const parsedItems = parseItems(activeSection, itemsJson);

    return {
      drone_id: droneId,
      section: activeSection.id,
      fields: form,
      items: parsedItems,
    };
  };

  const saveDraft = () => {
    const drafts = readDrafts();
    drafts[draftIdFor(activeSection.id, droneId)] = {
      drone_id: droneId,
      fields: form,
      itemsJson,
      updated_at: new Date().toISOString(),
    };
    localStorage.setItem(draftKey, JSON.stringify(drafts));
  };

  const publishLocalProfile = (body) => {
    if (activeSection.id !== "drone_profile") {
      return;
    }

    const profiles = readPublishedProfiles();
    profiles[droneId] = buildLocalProfile(droneId, body.fields, body.items);
    localStorage.setItem(publishedProfilesKey, JSON.stringify(profiles));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    setError("");

    try {
      const body = payload();
      saveDraft();
      publishLocalProfile(body);
      await API.post(activeSection.endpoint, body);
      setMessage(`${activeSection.label} content uploaded successfully.`);
    } catch (err) {
      console.error("Admin upload failed:", err);
      if (err instanceof SyntaxError) {
        setError("JSON format thik na. Please valid JSON dao.");
      } else {
        setMessage("Draft saved locally. My Drone profile local portal e update hoyeche.");
        setError(err.response?.data?.message || "Backend upload endpoint not available yet.");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="flex flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              Australia Agritech
            </p>
            <h1 className="text-3xl font-bold text-slate-950">Admin Panel</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800">
              {admin.name} - {admin.role}
            </span>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="grid gap-6 p-6 xl:grid-cols-[260px_1fr]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-400">
            Content Sections
          </div>
          <div className="space-y-1">
            {sections.map((section) => {
              const Icon = section.icon;
              const active = section.id === activeSection.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => changeSection(section.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${
                    active
                      ? "bg-green-700 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <Icon size={18} />
                  {section.label}
                </button>
              );
            })}
          </div>
        </aside>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm text-slate-400">Upload and manage portal content</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                {activeSection.label}
              </h2>
            </div>
            <label className="block text-sm font-medium text-slate-700">
              Drone
              <select
                value={droneId}
                onChange={(event) => changeDrone(event.target.value)}
                className="mt-2 h-11 rounded-xl border border-slate-300 bg-white px-4 outline-none focus:border-green-700"
              >
                <option value="t50">DJI Agras T50</option>
                <option value="t40">DJI Agras T40</option>
              </select>
            </label>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1fr_420px]">
            <div className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                {activeSection.fields.map(([name, label, placeholder]) => (
                  <label key={name} className="block text-sm font-medium text-slate-700">
                    {label}
                    <input
                      value={form[name] || ""}
                      onChange={(event) =>
                        setForm((prev) => ({ ...prev, [name]: event.target.value }))
                      }
                      placeholder={placeholder}
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
                    />
                  </label>
                ))}
              </div>

              {activeSection.jsonEditors ? (
                <div className="grid gap-4 xl:grid-cols-2">
                  {activeSection.jsonEditors.map((editor) => (
                    <label
                      key={editor.key}
                      className="block text-sm font-medium text-slate-700"
                    >
                      {editor.label}
                      <textarea
                        value={itemsJson[editor.key] || ""}
                        onChange={(event) =>
                          setItemsJson((prev) => ({
                            ...prev,
                            [editor.key]: event.target.value,
                          }))
                        }
                        className="mt-2 min-h-56 w-full rounded-xl border border-slate-300 px-4 py-3 font-mono text-sm outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
                      />
                    </label>
                  ))}
                </div>
              ) : (
                <label className="block text-sm font-medium text-slate-700">
                  {activeSection.itemsLabel}
                  <textarea
                    value={itemsJson}
                    onChange={(event) => setItemsJson(event.target.value)}
                    className="mt-2 min-h-48 w-full rounded-xl border border-slate-300 px-4 py-3 font-mono text-sm outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
                  />
                </label>
              )}

              {message && (
                <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
                  {message}
                </p>
              )}
              {error && (
                <p className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-medium text-orange-700">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 disabled:opacity-50"
                >
                  <UploadCloud size={18} />
                  {saving ? "Uploading..." : "Upload Content"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    saveDraft();
                    setMessage("Draft saved locally.");
                    setError("");
                  }}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Save size={18} />
                  Save Draft
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Upload Payload
              </h3>
              <pre className="mt-4 max-h-[520px] overflow-auto rounded-xl bg-slate-950 p-4 text-xs leading-6 text-slate-100">
                {JSON.stringify(
                  {
                    drone_id: droneId,
                    section: activeSection.id,
                    fields: form,
                    items: activeSection.jsonEditors
                      ? Object.fromEntries(
                          activeSection.jsonEditors.map((editor) => [
                            editor.key,
                            "JSON editor value",
                          ])
                        )
                      : "JSON editor value",
                  },
                  null,
                  2
                )}
              </pre>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
