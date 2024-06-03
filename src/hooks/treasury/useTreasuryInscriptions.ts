import useInscriptions from 'hooks/useInscriptions'
import { useMemo } from 'react'

const purchasedInscriptions = [
  'DE6B588B7EE04BD08981EE6C33AB42DAED4EE43C08BCF7DEEEC1B4F924B6A6E6',
  'F56A704B2C6002672E2FEBD839BA0B81C71DE2A0FCCC9F65590CC3720605FD4A',
  '856B329E590DC4663DFD440153E26E5EB47ACF1E6C2FA27207AA352F1FE8638A',
  'CE72FB90583010147AA4F24284508441B144B811F17C7D33A3EDBB485CC7C262',
  'E3C95B12B9B6E2332785BC04EB0C9581C5A3D6023145DBF0D2F0AF8FED5BADF2',
  'EB39464EA155DE62C69647ED6D0B326DB3E5436A7921FBF0367F7983F1BD36BB',
  '10A402AB553898B1F21B593FF1311482D522E61A494C651F225506CBAE461450',
  'DCC028325AC3F20853DC9D0EE99C37C2EADDB650AC4F6C45E43D98C5F2F91CCE',
  '1252300030632385EE9408CEB912E2512173E427E4A6CDFC5AC83C487A5BDF71',
  '641504FB213B41063B25CCD4ED1CFF27BEFDC9235B96BBBA7DEA46CC48202387',
  '113C9107D7E834192E0F29B9660277748FD21058B9F5D9048C40AA2605734FAC',
  '241EB0E0803DCE0350DDDEA136FC1E2DE382471C326E042A4A5D89E327E9100B',
  '6C150B403566E57922CE3B4A1C6CC1318F0C55EA79C3E61C0B235ED8CC3802E8',
  '3EA9FF555E723ACEEC75EC3B0E2FF39228AB3A46E545A7EAEED35507BB1B76D1',
  '872ADF9AEAF0FEE07344091350BA7A6D764531141B0EDA1D844B93B6B4453D92',
  '3ED831D0C4C2733E06843D043441B1E242C5A51C3173CC4161A0519763BB2355',
  '094B6993B5A9DA1D01FD6275B9AFDF71BB2D54CC08AE2190FB10C4666073C42C',
  'D540E74A6180E9AC02C03F62C3683932D1049E2C3BFC463D0ABF7C5DF6ECD590',
  '188CBDEDBC276CA990A41342D96F661B9ADC63A0B1E0DFD955149DCF19B0F8C5',
  '2B3B219DDC88DA3C1B1D4E6CA0952FD7B0C05E79C94EDA22457FD0D678AA2E67',
  '0992548DD937D11175CC9452B9A52BE49C6B28E9FD90984196116D8C9416FBE6',
  'FFDDCC98D22345AB7A603314BBC907FFD9ED573CE49B4DD5697A38E6ACA6C3B6',
  '20439C8F4851C9C97CB410CF1E3919123D4D2E09C7352198D4985BDA27918E04',
  '9B0CE551CC42690DB70B979553FD64AFE62B857377D811F4B3A04D6C507B9D9B',
  'F7D70A5B3C091E7B0A4D3CBFAD31F653AB2598E31B4745149AD11120172D5181',
  '3CD161E135BFF716E3E0728DBEED494232BF8A51FE802CCE13A6036C9176AF2D',
  'F88E74CC8A7049FBFAF7E40216F68FE91C7437FF920900EFA8DFFE2E14CABFC4',
  'EA89F497F996187EF7695BE3561E58A677FF720D36C665C79BEC0AE5F094C729',
  '1C8E93DB4EA977DD9E3D40A9401AD49A2F8CD3E924209E12236B41EAC6FD7F5C',
  '1E186DA93C9FAEAA2B57698F19EB8D9C2FF050B175D60D788A5EEF705C395C63',
  '5C989450AC10D8AD3757183E04858E3123BD869A96A14EE4FA89F01BBF4804DB',
  'C7C553EDD5B118B731AFAD5AC6ACDB1B01CF761024C3A04AC531D30AED91CD14',
  '9E80CCB5DD8040B58F48185502F6C79441B8A2BE6A7A6A68818FBAC3CF3CF366',
  '002DE5A5F9DB185CED5ABF17B1F21087520DF57BC8BB660D717CA7858E87C58A',
  'E4E31BFA3B759D9A9582F39C9379FA907FB581C07510BF726FB55299148EB05A',
  '76CA5A4C0DD888610CB26E87749F04465E21E278FE9A1AD03A9C6794A22AC7EC',
  '21B67F00DA8413FDA278904F770E92AA99CE45C6A87D3499722BA02D5719E2E1',
  'A45EBCB0788C2DD636548C8745CD37280F4DF12516837EDA848672EE5C5D175B',
  'A825A5E4A0B82F414FD77DCD51FE429C369CB69A8622E72AE8A7330D9393B2A7',
  '00C91EE06B223BE00CD632798662957E94FAF814C9D3A2B80B9D338428F70CD4',
  '8D51E71B8BFF8769779F8F5CE58D734D9542504CCA2B852D7224C744EFDF6861',
  '2A26F6254A2DC83B35FA03E2CE51041D67D88D387011D5F47452FC3FFE971668',
  '488E2D2B6E098B7C23246B6EE30BEA7145DCDC547B54E372E21B6E1E1EFF070D',
  '738C41AD032966018A2BC9B7DDF099A0283D50E45A22C617451DE848B49784B2',
  'B376C67C53FA5AE838E0B382C0019312A91EEB6BEBD0A5EAA92F5E29A9C88B34',
]

export default function useTreasuryPurchases() {
  const { data: inscriptionData } = useInscriptions()

  const [purchases, gangsters, miscellaneous] = useMemo(() => {
    if (!inscriptionData) return [[], [], []]
    const treasuryPurchases: TreasuryItem[] = []
    const treasuryGangsters: TreasuryItem[] = []
    const treasuryMiscellaneous: TreasuryItem[] = []
    inscriptionData.inscription.forEach((ins) => {
      if (purchasedInscriptions.includes(ins.transaction.hash)) {
        treasuryPurchases.push({
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
      treasuryMiscellaneous.push({
        type: 'inscription',
        href: `https://asteroidprotocol.io/app/inscription/${ins.transaction.hash}`,
        title: `Inscription ${ins.name}`,
        hash: ins.transaction.hash,
        ...ins,
      } as TreasuryItem)
    })

    return [treasuryPurchases, treasuryGangsters, treasuryMiscellaneous]
  }, [inscriptionData])

  return { purchases, gangsters, miscellaneous }
}
