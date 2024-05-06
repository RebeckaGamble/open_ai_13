import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function DialogComp({
  dialogEl,
  title,
  text,
  children,
  open,
  setOpen,
}) {
  return (
    <Dialog.Root open={open} onClose={() => setOpen(false)}>
      <Dialog.Trigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="h-auto items-center justify-center font-medium leading-none underline text-blue-900"
        >
          {dialogEl}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-full h-auto sm:max-h-[85vh] sm:w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-md focus:outline-none">
          <Dialog.Title className="text-black m-0 text-[20px] font-semibold">
            {title}
          </Dialog.Title>
          <Dialog.Title className="mt-[10px] mb-5 text-[16px] leading-normal">
            {text}
          </Dialog.Title>
          {children}
          <Dialog.Close asChild>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export const PrivacyDialog = () => {
  const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false);

  return (
    <DialogComp
      open={openPrivacyPolicy}
      setOpen={setOpenPrivacyPolicy}
      title={"Privacy Policy"}
      text={
        <div className="gap-2 flex flex-col">
          <p>
            ChefMate is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and safeguard your personal
            information.
          </p>
          <p>
            <strong>Information We Collect:</strong> We may collect personal
            information such as your name, email address, and other contact
            details when you register for an account or use our services.
          </p>
          <p>
            <strong>How We Use Your Information:</strong> We may use your
            personal information to provide you with our services, communicate
            with you, and improve ChefMate. We will not sell, rent, or share
            your personal information with third parties without your consent.
          </p>
          <p>
            <strong>Cookies:</strong> ChefMate may use cookies and similar
            technologies to enhance your experience, analyze usage, and
            personalize content and ads.
          </p>
          <p>
            <strong>Third-Party Links:</strong> ChefMate may contain links to
            third-party websites or services. We are not responsible for the
            privacy practices or content of these third-party sites.
          </p>
          <p>
            <strong>Security:</strong> We take reasonable measures to protect
            your personal information from unauthorized access, use, or
            disclosure.
          </p>
          <p>
            <strong>Changes to This Privacy Policy:</strong> ChefMate may update
            this Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      }
      dialogEl={"Privacy Policy"}
    >
      <div className="mt-[25px] flex justify-end">
        <Dialog.Close asChild>
          <button
            onClick={() => setOpenPrivacyPolicy(false)}
            aria-label="Close"
            className="bg-gray-300 text-black hover:bg-gray-500 hover:text-white inline-flex h-[35px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
          >
            Close
          </button>
        </Dialog.Close>
      </div>
    </DialogComp>
  );
};

export const TermsDialog = () => {
  const [openTermsOfUse, setOpenTermsOfUse] = useState(false);
  return (
    <DialogComp
      open={openTermsOfUse}
      setOpen={setOpenTermsOfUse}
      title={"Terms of use"}
      text={
        <div className="gap-2 flex flex-col h-auto overflow-y-auto">
          <div>
            <p>
              Welcome to ChefMate! These terms and conditions outline the rules
              and regulations for the use of ChefMate's Website, located at
              www.chefmate.com.
            </p>
            <p>
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use ChefMate if you do not agree to
              take all of the terms and conditions stated on this page.
            </p>
          </div>
          <div>
            <p>
              Cookies: We employ the use of cookies. By accessing ChefMate, you
              agreed to use cookies in agreement with the ChefMate's Privacy
              Policy.
            </p>
            <p>
              Most interactive websites use cookies to let us retrieve the
              user's details for each visit. Cookies are used by our website to
              enable the functionality of certain areas to make it easier for
              people visiting our website. Some of our affiliate/advertising
              partners may also use cookies.
            </p>
          </div>
          <div>
            <p>
              License: Unless otherwise stated, ChefMate and/or its licensors
              own the intellectual property rights for all material on ChefMate.
              All intellectual property rights are reserved. You may access this
              from ChefMate for your own personal use subjected to restrictions
              set in these terms and conditions.
            </p>
            <p>This Agreement shall begin on the date hereof.</p>
          </div>
        </div>
      }
      dialogEl={"Terms of use"}
    >
      <div className="mt-[25px] flex flex-row gap-4 justify-end">
        <Dialog.Close asChild>
          <button
            onClick={() => setOpenTermsOfUse(false)}
            aria-label="Close"
            className="bg-gray-300 text-black hover:bg-gray-400 inline-flex h-[35px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
          >
            Close
          </button>
        </Dialog.Close>

        <Dialog.Close asChild>
          <button
            onClick={() => setOpenTermsOfUse(false)}
            aria-label="Agree"
            className="bg-green-300 text-black hover:bg-green-500 inline-flex h-[35px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
          >
            I agree
          </button>
        </Dialog.Close>
      </div>
    </DialogComp>
  );
};
