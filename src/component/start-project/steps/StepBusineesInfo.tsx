  "use client";

  import { useState } from "react";
  import { X } from "lucide-react";
  import { useProjectWizard } from "@/hooks/useProjectWizard";

  export default function StepBusinessInfo() {
    const { data, updateField } = useProjectWizard();

    const [serviceInput, setServiceInput] = useState("");

    const addService = () => {
      const service = serviceInput.trim();

      if (!service) return;

      // Prevent duplicate services
      if (data.servicesOffered.includes(service)) {
        setServiceInput("");
        return;
      }

      updateField("servicesOffered", [
        ...data.servicesOffered,
        service,
      ]);

      setServiceInput("");
    };

    const removeService = (serviceToRemove: string) => {
      updateField(
        "servicesOffered",
        data.servicesOffered.filter(
          (service) => service !== serviceToRemove
        )
      );
    };

    const handleServiceKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addService();
      }
    };

    return (
      <div className="space-y-8">
        
        
        <section>
    <div className="mb-5">
      <h3 className="text-lg font-semibold text-text-primary">
        Your contact information
      </h3>

      <p className="mt-1 text-sm text-text-muted">
        We'll use these details to contact you about your project.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-2">
      <div>
        <label
          htmlFor="clientName"
          className="mb-2 block text-sm font-medium text-text-secondary"
        >
          Full name
        </label>

        <input
          id="clientName"
          type="text"
          value={data.clientName}
          onChange={(e) =>
            updateField("clientName", e.target.value)
          }
          placeholder="Your full name"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label
          htmlFor="clientPhone"
          className="mb-2 block text-sm font-medium text-text-secondary"
        >
          Phone number
        </label>

        <input
          id="clientPhone"
          type="tel"
          value={data.clientPhone}
          onChange={(e) =>
            updateField("clientPhone", e.target.value)
          }
          placeholder="+234..."
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>

      <div className="md:col-span-2">
        <label
          htmlFor="clientEmail"
          className="mb-2 block text-sm font-medium text-text-secondary"
        >
          Email address
        </label>

        <input
          id="clientEmail"
          type="email"
          value={data.clientEmail}
          onChange={(e) =>
            updateField("clientEmail", e.target.value)
          }
          placeholder="you@example.com"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>
    </div>
  </section>

            {/* Business Name */}
        <div className="space-y-2">
      <div className="mb-5">
      <h3 className="text-lg font-semibold text-text-primary">
        Business information
      </h3>

      <p className="mt-1 text-sm text-text-muted">
        Tell us a little about the business this website is for.
      </p>
    </div>
          

          <label
        htmlFor="business Name"
        className="mb-2 block text-sm font-medium text-text-secondary"
      >
        Business name
        
      </label>

          <input
            id="businessName"
            type="text"
            value={data.businessName}
            onChange={(event) =>
              updateField("businessName", event.target.value)
            }
            placeholder="e.g. Presh Dev"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

        {/*Registration number + country */}
        <div className="grid gap-5 md:grid-cols-2">
    <div>
      <label
        htmlFor="businessRegistrationNumber"
        className="mb-2 block text-sm font-medium text-text-secondary"
      >
        Company registration number
        <span className="ml-1 text-xs text-text-muted">
          (optional)
        </span>
      </label>

      <input
        id="businessRegistrationNumber"
        type="text"
        value={data.businessRegistrationNumber}
        onChange={(e) =>
          updateField(
            "businessRegistrationNumber",
            e.target.value
          )
        }
        placeholder="e.g. RC123456"
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
      />
    </div>

    <div>
      <label
        htmlFor="countryOfOperation"
        className="mb-2 block text-sm font-medium text-text-secondary"
      >
        Country of operation
      </label>

      <input
        id="countryOfOperation"
        type="text"
        value={data.countryOfOperation}
        onChange={(e) =>
          updateField(
            "countryOfOperation",
            e.target.value
          )
        }
        placeholder="e.g. Nigeria"
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
      />
    </div>
  </div>

    {/* Business address */}
    <div>
    <label
      htmlFor="businessAddress"
      className="mb-2 block text-sm font-medium text-text-secondary"
    >
      Business address
      <span className="ml-1 text-xs text-text-muted">
        (optional)
      </span>
    </label>

    <textarea
      id="businessAddress"
      value={data.businessAddress}
      onChange={(e) =>
        updateField("businessAddress", e.target.value)
      }
      rows={3}
      placeholder="Business address"
      className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
    />
  </div>


        {/* Business Description */}
        <div className="space-y-2">
          <label
            htmlFor="businessDescription"
            className="text-sm font-medium text-text-primary"
          >
            What does your business do?
          </label>

          <textarea
            id="businessDescription"
            rows={5}
            value={data.businessDescription}
            onChange={(event) =>
              updateField(
                "businessDescription",
                event.target.value
              )
            }
            placeholder="Briefly describe what your business does..."
            className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

        {/* Services Offered */}
        <div className="space-y-3">
          <div>
            <label
              htmlFor="servicesOffered"
              className="text-sm font-medium text-text-primary"
            >
              What services does your business offer?
            </label>

            <p className="mt-1 text-sm text-text-muted">
              Add the main services your business provides.
            </p>
          </div>

          {/* Added services */}
          {data.servicesOffered.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {data.servicesOffered.map((service) => (
                <span
                  key={service}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm text-text-primary"
                >
                  {service}

                  <button
                    type="button"
                    onClick={() => removeService(service)}
                    aria-label={`Remove ${service}`}
                    className="text-text-muted transition hover:text-text-primary"
                  >
                    <X size={15} />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Service input */}
          <div className="flex gap-3">
            <input
              id="servicesOffered"
              type="text"
              value={serviceInput}
              onChange={(event) =>
                setServiceInput(event.target.value)
              }
              onKeyDown={handleServiceKeyDown}
              placeholder="e.g. Web Design"
              className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
            />

            <button
              type="button"
              onClick={addService}
              disabled={!serviceInput.trim()}
              className="rounded-xl border border-border px-5 py-3 text-sm font-medium text-text-primary transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              Add
            </button>
          </div>

          <p className="text-xs text-text-muted">
            Press Enter or click Add to add a service.
          </p>
        </div>
      </div>
    );
  }