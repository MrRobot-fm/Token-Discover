"use client";

import { useForm } from "react-hook-form";
import { useSearchParams } from "@/hooks/use-search-params";
import { useGetCollectionsByName } from "@/api/collections/hooks/use-get-collections-by-name";
import { SearchBar } from "@/components/atoms/Forms/SearchBar/SearchBar";
import { TopNftSoldCard } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard";
import { DiscoverIndexList } from "../DiscoverIndexList/DiscoverIndexList";
import { useDiscoverCollections } from "./use-discover-collections";

export const DiscoverCollectionsSection = () => {
  const { register, watch, handleSubmit, reset } = useForm<{
    collectionName: string;
  }>({
    defaultValues: {
      collectionName: "",
    },
  });

  const { search, handleSearch } = useSearchParams({
    formValue: watch("collectionName"),
    defaultParam: "bored",
    reset,
  });

  const { data, isLoading } = useGetCollectionsByName({
    collectionName: search || "bored",
  });

  const { filteredItems } = useDiscoverCollections({ data });

  return (
    <div className="w-full py-[6rem] base:space-y-[4rem] xl:space-y-[6rem]">
      <SearchBar
        name="collectionName"
        placeholder="Search your favorite collections"
        register={register}
        onSubmit={handleSubmit(handleSearch)}
      />
      <DiscoverIndexList
        skeletonVariant="fluid"
        isLoading={isLoading}
        items={(filteredItems || [])?.map((item, index) => (
          <TopNftSoldCard key={index} {...item} />
        ))}
      />
    </div>
  );
};
