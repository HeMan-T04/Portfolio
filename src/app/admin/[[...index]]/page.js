"use client";
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function AdminPage() {
  return (
    <>
      <title>HeManT</title>
      <meta></meta>
      <NextStudio config={config} />
    </>
  );
}
