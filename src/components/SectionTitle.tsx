import { assets } from '../assets'

export default function SectionTitle({ children }: { children: string }) {
  return (
    <div className="section-title">
      <img src={assets.lineTitle} alt="" />
      <h2>{children}</h2>
      <img src={assets.lineTitle} alt="" />
    </div>
  )
}
