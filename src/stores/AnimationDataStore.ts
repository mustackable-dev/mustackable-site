import { LogoData } from "../types/LogoData"
import { create } from "../utilities/GlobalStoreReset"
interface AnimationDataStore {
    logoData?: LogoData
    setLogoData: (data: LogoData) => void
}

export const useAnimationDataStore = create('animationData')<AnimationDataStore>()((set) => (
    {
        setLogoData(data) {
            set({ logoData: data })
        }
    }))