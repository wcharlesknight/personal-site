/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from "@headlessui/react";
import { X } from "heroicons-react";
import React, { Fragment, useRef } from "react";
// import * as Button from "../button";
// import * as SelectMenu from "../forms/select-menu";
// import * as Input from "../forms/input";

export interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    styling: {
        showButtonsBorder: boolean;
    };
    content?: Content;
    ref?: any;
}

export interface Content {
    header: { title: string };
    body: {
        description?: string;
        // inputs?: Input.Props[];
        // selectMenus?: SelectMenu.Props[];
        customElement?: JSX.Element;
    };
    wrapper?: (children: React.ReactElement) => JSX.Element;
    classNames?: { wholeContainer?: string; body?: string; footer?: string };
    belowInput?: { content: JSX.Element };
    footer?: {
        leftButtons?: ButtonProps[];
        rightButtons?: ButtonProps[];
        singleBigButton?: ButtonProps;
        customElement?: JSX.Element;
    };
}

type ButtonProps = {
    type?: "button" | "submit";
    // style?: Button.Style;
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    text?: string;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    triggerOnEnter?: boolean;
};

export function Modal(props: Props) {
    const cancelButtonRef = useRef(null);

    type ConditonalWrapperProps = {
        children: React.ReactElement[];
        // condition: boolean;
        wrapper?: (children: React.ReactElement) => JSX.Element;
    };
    const ConditonalWrapper: React.FC<ConditonalWrapperProps> = ({ wrapper, children }) => (wrapper ? wrapper(<>{children}</>) : <>{children}</>);

    return (
        <Transition.Root show={props.isOpen} as={Fragment}>
            <Dialog
                as="div"
                static
                className="fixed z-100 inset-0 overflow-y-auto"
                open={props.isOpen}
                initialFocus={cancelButtonRef}
                onClose={() => props.setIsOpen(false)}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-3000"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-50 transition-opacity" />
                    </Transition.Child>
                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-3000"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <div
                            className={
                                ` inline-block sm:max-w-xl w-action-modal align-bottom bg-white rounded-md text-left overflow-visible shadow-2xl transform transition-all sm:my-8 sm:align-middle ` +
                                `${props.content?.classNames?.wholeContainer}`
                            }>
                            <ConditonalWrapper wrapper={props.content?.wrapper}>
                                <div className="flex flex-row justify-between px-8 py-4 border-b border-default-border-color">
                                    <Dialog.Title as="h3" className="text-lg font-medium text-gray-700">
                                        {props.content?.header.title}
                                    </Dialog.Title>
                                    <button
                                        type="button"
                                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => {
                                            props.setIsOpen(false);
                                        }}>
                                        <span className="sr-only">Close</span>

                                        <X className="h-4 w-4" aria-hidden="true" ref={cancelButtonRef} />
                                    </button>
                                </div>
                                <div className={`px-8 py-5 ${props.content?.classNames?.body && props.content.classNames.body}`}>
                                    {props.content?.body.description && (
                                        <Dialog.Description as="p" className="text-sm font-normal  text-gray-500 mb-4">
                                            {props.content?.body.description}
                                        </Dialog.Description>
                                    )}
                                    {/* {props.content?.body.inputs?.map((input, index) => (
                                        <Input.Input key={input.value + index} className="my-5" {...input} />
                                    ))} */}
                                    {props.content?.body.customElement}
                                    {/* {props.content?.body.selectMenus?.map((menu) => (
                                        <SelectMenu.Menu {...menu} />
                                    ))} */}
                                </div>
                                <div
                                    className={
                                        `flex flex-row px-8 space-x-2 justify-between ${props.content?.classNames?.footer}` +
                                        (props.styling.showButtonsBorder ? " border-t border-default-border-color py-4" : " py-6")
                                    }>
                                    <div className="space-x-3">
                                        {/* {props.content?.footer?.leftButtons?.map((button, index) => (
                                            <Button.Button {...button} key={button.text ?? "button_" + index} size="small" />
                                        ))} */}
                                    </div>
                                    <div className="space-x-3">
                                        {/* {props.content?.footer?.rightButtons?.map((button, index) => (
                                            <Button.Button {...button} key={button.text ?? "button_rightButtons_" + index} size="small" />
                                        ))} */}
                                    </div>
                                    {/* {props.content?.footer?.singleBigButton && (
                                        <Button.Button {...props.content.footer.singleBigButton.style} size="small" className={"w-full"} />
                                    )} */}
                                    {props.content?.footer?.customElement && <>{props.content.footer.customElement}</>}
                                </div>
                            </ConditonalWrapper>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
