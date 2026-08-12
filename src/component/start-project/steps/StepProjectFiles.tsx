"use client";

import { useRef } from "react";
import { FileText, Image as ImageIcon, Upload, X } from "lucide-react";

import { useProjectWizard } from "@/hooks/useProjectWizard";

export default function StepProjectFiles() {
  const { data, updateField } = useProjectWizard();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const newFiles = Array.from(files);

    updateField("files", [
      ...data.files,
      ...newFiles,
    ]);
  };

  const removeFile = (index: number) => {
    updateField(
      "files",
      data.files.filter((_, fileIndex) => fileIndex !== index)
    );
  };

  return (
    <div className="space-y-8">
      {/* Upload area */}
      <section>
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-text-primary">
            Do you have files or references to share?
          </h3>

          <p className="mt-1 text-sm leading-6 text-text-muted">
            Upload your logo, reference images, documents, screenshots,
            or anything else that can help us understand your project.
          </p>
        </div>

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-surface px-6 py-12 text-center transition hover:border-accent/60 hover:bg-accent/5"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Upload size={22} />
          </div>

          <h4 className="font-medium text-text-primary">
            Upload files
          </h4>

          <p className="mt-2 text-sm text-text-muted">
            Click to browse files from your device
          </p>

          <p className="mt-2 text-xs text-text-muted">
            Images, PDFs, documents and other project references
          </p>
        </button>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(event) => {
            handleFiles(event.target.files);

            // Allows selecting the same file again later.
            event.target.value = "";
          }}
        />
      </section>

      {/* Selected files */}
      {data.files.length > 0 && (
        <section>
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-text-secondary">
              Selected files
            </h3>
          </div>

          <div className="space-y-3">
            {data.files.map((file, index) => {
              const isImage = file.type.startsWith("image/");

              return (
                <div
                  key={`${file.name}-${file.size}-${index}`}
                  className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {isImage ? (
                        <ImageIcon size={18} />
                      ) : (
                        <FileText size={18} />
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-text-primary">
                        {file.name}
                      </p>

                      <p className="mt-1 text-xs text-text-muted">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="shrink-0 text-text-muted transition hover:text-red-400"
                    aria-label={`Remove ${file.name}`}
                  >
                    <X size={18} />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <p className="text-xs leading-5 text-text-muted">
        Uploads are optional. You can continue without attaching anything.
      </p>
    </div>
  );
}