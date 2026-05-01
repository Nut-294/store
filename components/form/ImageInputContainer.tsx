"use client";
import { type actionFunction } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Button";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text, children } = props;
  console.log(image)
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  return (
    <div className="mb-8">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        priority
        className="rounded object-cover mb-4 w-50  h-50"
      />
      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-md mt-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  );
}
export default ImageInputContainer;
