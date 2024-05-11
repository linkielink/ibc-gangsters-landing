import useInscriptions from 'hooks/useInscriptions'
import { useMemo } from 'react'

const giftedInscriptions = [
  'C4C49590388C8C4E6DFE2314DA0B2380E25B6CBA5265678CADCDF286C38FD0B6',
  '3008E66BEC34FFEFB287D9B116A47E1892307D6E0F5CAA75C9C5F6305CD0DB9C',
  '1F050FC3BE19AC5F3E7F794F161BE2D6FA82C3DFE630FCEF58381121DC1974F5',
  '20A60622A58BD46284017288FD60C0BCF6915CA4C195C8BE94AF7E541A57C8C0',
  '15E7CAF631A4213FA2F156FB38102076C85DD4D97D41F899550DAD90A5B4E859',
  '914BE5006C8833DEF8691CA92D866BF23B4F751E81F084B706D30DABFEB1DB53',
  '32B643C894404D6B8D6C19887662EB94B9B8CFDCF243E566E6149B8C9EF88184',
  '83DFAE13342EF8990089CB31127271AE9D5FC40A8235EC2F428C8788C3846E09',
  '9572B30D604B2900C8153B54B2D0E4EB38E070A1F4CD4C00F0FA3C02C1C1B1C0',
  '5B2F4ADB6D434B2C9D5C7051B6EE092A84666337598905D05B27EDBEDD1645DD',
  '96E2E1214573B98475459E14E0CBF69F10CE2746D3C878FC01E11CB86F71E111',
]

export default function useTreasuryInscriptions() {
  const { data: inscriptionData } = useInscriptions()

  const [inscriptions, gangsters, gifts] = useMemo(() => {
    if (!inscriptionData) return [[], [], []]
    const treasuryInscriptions: TreasuryItem[] = []
    const treasuryGangsters: TreasuryItem[] = []
    const treasuryGifts: TreasuryItem[] = []
    inscriptionData.inscription.forEach((ins) => {
      if (giftedInscriptions.includes(ins.transaction.hash)) {
        treasuryGifts.push({
          type: 'inscription',
          href: `https://asteroidprotocol.io/app/inscription/${ins.transaction.hash}`,
          title: `Inscription ${ins.name}`,
          hash: ins.transaction.hash,
          ...ins,
        } as TreasuryItem)
        return
      }

      if (ins.name.includes('IBC Gangsters #')) {
        treasuryGangsters.push({
          type: 'inscription',
          href: `https://asteroidprotocol.io/app/inscription/${ins.transaction.hash}`,
          title: `Inscription ${ins.name}`,
          hash: ins.transaction.hash,
          ...ins,
        } as TreasuryItem)
        return
      }
      treasuryInscriptions.push({
        type: 'inscription',
        href: `https://asteroidprotocol.io/app/inscription/${ins.transaction.hash}`,
        title: `Inscription ${ins.name}`,
        hash: ins.transaction.hash,
        ...ins,
      } as TreasuryItem)
    })

    return [treasuryInscriptions, treasuryGangsters, treasuryGifts]
  }, [inscriptionData])

  return { inscriptions, gangsters, gifts }
}
