"use client";

import { Modal, AppButton } from "@/shared/components/ui";
import { Camera, Smartphone, Apple, Play } from "lucide-react";

interface ScanCameraModalProps {
    trigger: React.ReactElement;
}

export function ScanCameraModal({ trigger }: ScanCameraModalProps) {
    return (
        <Modal
            title="Scan with Camera"
            trigger={trigger}
            size="md"
        >
            <div className="py-6 space-y-8 text-center">
                <div className="mx-auto w-20 h-20 rounded-3xl bg-green-50 flex items-center justify-center text-green-600 animate-pulse">
                    <Camera className="h-10 w-10" />
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">Get the Mobile App</h3>
                    <p className="text-slate-500 text-sm leading-relaxed px-4">
                        Scanning ingredients is only available on our mobile application. Download it now to track your pantry effortlessly!
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <AppButton className="w-full h-14 rounded-2xl bg-black hover:bg-zinc-900 border-none group">
                        <div className="flex items-center justify-start w-full gap-3 px-4">
                            <Apple className="h-8 w-8 fill-white" />
                            <div className="text-left">
                                <p className="text-[10px] uppercase font-bold text-zinc-400 leading-none">Download on the</p>
                                <p className="text-lg font-bold text-white leading-tight">App Store</p>
                            </div>
                        </div>
                    </AppButton>

                    <AppButton className="w-full h-14 rounded-2xl bg-black hover:bg-zinc-900 border-none">
                        <div className="flex items-center justify-start w-full gap-3 px-4">
                            <Play className="h-7 w-7 fill-white text-white" />
                            <div className="text-left">
                                <p className="text-[10px] uppercase font-bold text-zinc-400 leading-none">Get it on</p>
                                <p className="text-lg font-bold text-white leading-tight">Google Play</p>
                            </div>
                        </div>
                    </AppButton>
                </div>

                <div className="pt-4 flex items-center justify-center gap-2 text-slate-400 text-xs font-medium">
                    <Smartphone className="h-4 w-4" />
                    Available for iOS and Android
                </div>
            </div>
        </Modal>
    );
}
