"use client";
import FormSelect from "@/components/form-select";

import React, { useState } from "react";

const FilterCompaniesForm = () => {
  const [state, setState] = useState<string[] | null>(null);
  const [business_model, setBusinessModel] = useState<string[] | null>(null);
  const [category, setCategory] = useState<string[] | null>(null);
  const [annual_sales_range, setAnnualSalesRange] = useState<string[] | null>(
    null
  );

  // Logging for now to remove linting errors
  console.log(state, business_model, category, annual_sales_range);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Filter Companies
        </h2>
        <form action="#">
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
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Filter Companies
          </button>
        </form>
      </div>
    </section>
  );
};

export default FilterCompaniesForm;
