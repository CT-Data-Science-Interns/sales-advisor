"use client";
import FormSelect from "@/components/form-select";

import React, { FormEvent, useState } from "react";
import { ItineraryStage } from "./itinerary-stage-progress";
import { DelegationObject } from "../lib/get-delegations";
import { filterCompanies } from "../lib/filter-companies";

const FilterCompaniesForm = ({
  currentPageHandler,
  setFilteredCompanies,
  delegations,
}: {
  currentPageHandler: CallableFunction;
  setFilteredCompanies: CallableFunction;
  delegations: DelegationObject | null;
}) => {
  const [states, setStates] = useState<string[] | null>(null);
  const [businessModels, setBusinessModels] = useState<string[] | null>(null);
  const [categories, setCategories] = useState<string[] | null>(null);
  const [subcategories, setSubcategories] = useState<string[] | null>(null);
  // const [annualSalesRanges, setAnnualSalesRanges] = useState<string[] | null>(
  //   null
  // );

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const filteredCompanies = filterCompanies(
      states,
      businessModels,
      categories,
      subcategories
      // annualSalesRanges
    );
    filteredCompanies.then((data) => setFilteredCompanies(data));
    currentPageHandler(ItineraryStage.GENERATE_AND_SAVE);
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
                onSelectChange={setStates}
                options={
                  delegations?.delegatedStates.map((state) => {
                    return {
                      value: state.uuid,
                      label: state.value,
                    };
                  }) || []
                }
                isMulti
              />
            </div>
            <div className="w-full">
              <FormSelect
                title="Business Model"
                onSelectChange={setBusinessModels}
                options={
                  delegations?.delegatedBusinessModels.map((businessModels) => {
                    return {
                      value: businessModels.uuid,
                      label: businessModels.value,
                    };
                  }) || []
                }
                isMulti
              />
            </div>
            <div className="w-full">
              <FormSelect
                title="Category"
                onSelectChange={setCategories}
                options={
                  delegations?.delegatedCategories.map((category) => {
                    return {
                      value: category.uuid,
                      label: category.value,
                    };
                  }) || []
                }
                isMulti
              />
            </div>
            <div>
              <div className="w-full">
                <FormSelect
                  title="Subcategory"
                  onSelectChange={setSubcategories}
                  options={
                    delegations?.delegatedSubcategories.map((subcategory) => {
                      return {
                        value: subcategory.uuid,
                        label: subcategory.value,
                      };
                    }) || []
                  }
                  isMulti
                />
              </div>
            </div>
            {/* <div>
              <div className="w-full">
                <FormSelect
                  title="Annual Sales Range"
                  onSelectChange={setAnnualSalesRanges}
                  options={delegations?.delegatedAnnualSalesRanges || []}
                  isMulti
                />
              </div>
            </div> */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default FilterCompaniesForm;
