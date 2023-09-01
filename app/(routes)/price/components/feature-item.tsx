interface FeatureItemProps {
  Icon: React.ComponentType<{ absoluteStrokeWidth: unknown; size: number }>
  description: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({ Icon, description }) => {
  return (
    <li className="flex items-center gap-2">
      <Icon absoluteStrokeWidth size={20} />
      {description}
    </li>
  )
}

export default FeatureItem
