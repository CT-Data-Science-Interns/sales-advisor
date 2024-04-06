"use client";
import FormSelect from "@/components/form-select";

import React, { FormEvent, useState } from "react";

const FilterCompaniesForm = () => {
  const [state, setState] = useState<string[] | null>(null);
  const [businessModel, setBusinessModel] = useState<string[] | null>(null);
  const [category, setCategory] = useState<string[] | null>(null);
  const [annualSalesRange, setAnnualSalesRange] = useState<string[] | null>(
    null
  );

  // Logging for now to remove linting errors
  console.log(state, businessModel, category, annualSalesRange);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Filter Companies
        </h2>
        <form action="#" onSubmit={handleFormSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <FormSelect
                title="States"
                onSelectChange={setState}
                options={[
                  "Pangasinan",
                  "QC",
                  "Manila",
                  "Cebu",
                  "Davao",
                  "Cavite",
                ]}
                isMulti
              />
            </div>
            <div className="w-full">
              <FormSelect
                title="Business Model"
                onSelectChange={setBusinessModel}
                options={["OEM", "ODM", "OBM", "CM"]}
                isMulti
              />
            </div>
            <div className="w-full">
              <FormSelect
                title="Category"
                onSelectChange={setCategory}
                options={[
                  "Agriculture",
                  "Electronics",
                  "Automotive",
                  "Textile",
                ]}
                isMulti
              />
            </div>
            <div>
              <div className="w-full">
                <FormSelect
                  title="Annual Sales Range"
                  onSelectChange={setAnnualSalesRange}
                  options={["< $1M", "$1M - $10M", "$10M - $100M", "> $100M"]}
                  isMulti
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 sm:mt-6"
          >
            Filter Companies
          </button>
        </form>
      </div>
    </section>
  );
};

export default FilterCompaniesForm;
