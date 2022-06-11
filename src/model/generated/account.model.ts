import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_, OneToOne as OneToOne_} from "typeorm"
import {AccountTransfer} from "./accountTransfer.model"
import {Contributor} from "./contributor.model"
import {Contribution} from "./contribution.model"
import {Reward} from "./reward.model"
import {Slash} from "./slash.model"
import {Bond} from "./bond.model"
import {EraValidator} from "./eraValidator.model"
import {EraNominator} from "./eraNominator.model"
import {Staker} from "./staker.model"

@Entity_()
export class Account {
  constructor(props?: Partial<Account>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @OneToMany_(() => AccountTransfer, e => e.account)
  transfers!: AccountTransfer[]

  @OneToMany_(() => Contributor, e => e.account)
  crowdloans!: Contributor[]

  @OneToMany_(() => Contribution, e => e.account)
  contributions!: Contribution[]

  @OneToMany_(() => Reward, e => e.account)
  rewards!: Reward[]

  @OneToMany_(() => Slash, e => e.account)
  slashes!: Slash[]

  @OneToMany_(() => Bond, e => e.account)
  bonds!: Bond[]

  @OneToMany_(() => EraValidator, e => e.stash)
  validatorHistory!: EraValidator[]

  @OneToMany_(() => EraNominator, e => e.stash)
  nominatorHistory!: EraNominator[]

  @OneToOne_(() => Staker)
  stakingInfo!: Staker | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  lastUpdateBlock!: bigint
}
