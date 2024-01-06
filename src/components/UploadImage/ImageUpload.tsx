import React, { useCallback, useEffect, useRef, useState } from "react";
import uploadImg from "../../assets/images/cloud-upload.png";
import { ImageConfig } from "./FileConfig";
import { Controller, useController, useFormContext } from "react-hook-form";
import CustomBox from "./CustomBox";

interface IProps {
  limit: number;
  multiple: boolean;
  name: string;
}

const ImageUpload = ({ limit, multiple, name }: IProps) => {
  const {
    control,
    formState: { isSubmitting, errors },
  } = useFormContext();
  const { field } = useController({ name, control });
  const [singleFile, setSingleFile] = useState<File[]>([]);
  const [fileList, setFileList] = useState<File[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onDragEnter = () => wrapperRef.current?.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current?.classList.remove("dragover");

  const onFileDrop = useCallback(
    (e: React.SyntheticEvent<EventTarget>) => {
      const target = e.target as HTMLInputElement;
      if (!target.files) return;

      if (limit === 1) {
        const newFile = Object.values(target.files).map((file: File) => file);
        if (singleFile.length >= 1) return alert("Only a single image allowed");
        const updatedSingleList = [...singleFile, ...newFile];
        setSingleFile(updatedSingleList);
        field.onChange(updatedSingleList[0]);
      }

      if (multiple) {
        const newFiles = Object.values(target.files).map((file: File) => file);
        if (newFiles) {
          const updatedList = [...fileList, ...newFiles];
          if (updatedList.length > limit || newFiles.length > 3) {
            return alert(`Image must not be more than ${limit}`);
          }
          setFileList(updatedList);
          field.onChange(updatedList);
        }
      }
    },
    [field, fileList, limit, multiple, singleFile]
  );

  type CustomType = "jpg" | "png" | "svg";

  const calcSize = (size: number) => {
    return size < 1000000
      ? `${Math.floor(size / 1000)} KB`
      : `${Math.floor(size / 1000000)} MB`;
  };

  useEffect(() => {
    if (isSubmitting) {
      setFileList([]);
      setSingleFile([]);
    }
  }, [isSubmitting]);

  return (
    <>
      <CustomBox className="mt-5">
        <div
          className="flex justify-center items-center relative w-full h-52 border-2 border-dashed border-blue-500 rounded-lg"
          ref={wrapperRef}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDragLeave}
        >
          <div className="flex flex-col items-center space-y-2 p-2 text-center">
            <p className="text-gray-400">
              {limit > 1 ? "Browse files to upload" : "Browse file to upload"}
            </p>
            <div>
              <img src={uploadImg} alt="file upload" className="w-20" />
            </div>
            <p className="text-sm">
              <strong>Supported Files</strong> JPG, JPEG, PNG
            </p>
          </div>
          <Controller
            name={name}
            defaultValue=""
            control={control}
            render={({ field: { name, onBlur, ref } }) => (
              <input
                type="file"
                name={name}
                onBlur={onBlur}
                ref={ref}
                onChange={onFileDrop}
                multiple={multiple}
                accept="image/jpg, image/png, image/jpeg"
                style={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                }}
              />
            )}
          />
        </div>
      </CustomBox>

      <div
        className={`text-center my-1 ${
          errors[name] ? "text-red" : "text-black"
        }`}
      >
        {errors[name] ? (errors[name]?.message as unknown as string) : ""}
      </div>

      {fileList.length > 0 || singleFile.length > 0 ? (
        <>
          <div className="my-2">
            {(multiple ? fileList : singleFile).map((item, index) => {
              const imageType = item.type.split("/")[1] as CustomType;
              return (
                <div
                  key={index}
                  className="relative bg-[#f5f8ff] rounded-md py-2 px-2 mt-2"
                >
                  <div className="flex">
                    <img
                      src={
                        ImageConfig[`${imageType}`] || ImageConfig["default"]
                      }
                      alt="upload"
                      style={{
                        height: "3.5rem",
                        objectFit: "contain",
                      }}
                    />
                    <div className="ml-1">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm">{calcSize(item.size)}</p>
                    </div>
                  </div>

                  {/* Delete Btn */}
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default ImageUpload;
