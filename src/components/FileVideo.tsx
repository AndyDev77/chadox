"use client";

import { Button } from "@/components/ui/button";
import { useDropzone } from "@uploadthing/react/hooks";
import Image from "next/image";
import { Dispatch, SetStateAction, useCallback } from "react";
import { FileWithPath } from "react-dropzone";
import { generateClientDropzoneAccept } from "uploadthing/client";

type FileVideoProps = {
  onFieldChange: (url: string) => void;
  videoUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileVideo({ videoUrl, onFieldChange, setFiles }: FileVideoProps) {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
    const file = acceptedFiles[0];
    const objectUrl = URL.createObjectURL(file);
    onFieldChange(objectUrl);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(["video/*"]), // Accepter seulement les vidéos
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {videoUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <video src={videoUrl} controls className="w-full h-full object-cover object-center" />
        </div>
      ) : (
        <div className="flex-center flex-col py-5 text-grey-500">
          <Image src="/img/icons/monitor-up.svg" width={77} height={77} alt="file upload" />
          <h3 className="mb-2 mt-2">Glisser la vidéo ici</h3>
          <p className="p-medium-12 mb-4">MP4, AVI, MOV</p>
          <Button type="button" className="rounded-full">
            Sélection à partir de l&apos;ordinateur
          </Button>
        </div>
      )}
    </div>
  );
}
