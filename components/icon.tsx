export interface IconProps {
  size?: number
  className?: string
}

// ─── Base wrapper ───

function Svg({
  size,
  viewBox,
  className,
  children
}: IconProps & { viewBox: string; children: React.ReactNode }) {
  return (
    <svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  )
}

// ─── Feature icons (24×24, feather-style) ───

export function WorkflowIcon(props: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="5" cy="6" r="2.5" />
      <circle cx="19" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M7 7.5L10 16M17 7.5L14 16" />
    </Svg>
  )
}

export function VersionIcon(props: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7V12L15 15" />
      <path d="M8 3L12 0.5L16 3" />
    </Svg>
  )
}

export function SelectIcon(props: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M3 3L9 9" />
      <path d="M3 9V3H9" />
      <path d="M21 21L15 15" />
      <path d="M21 15V21H15" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
    </Svg>
  )
}

export function AiIcon(props: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M12 2L15 9L22 9L16.5 14L18.5 21L12 17L5.5 21L7.5 14L2 9L9 9L12 2Z" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </Svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" />
      <path d="M8 11H14" />
      <path d="M11 8V14" />
    </Svg>
  )
}

export function SkillIcon(props: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M12 2L16 6H14V11H18V9L22 13L18 17V15H14V20H16L12 24L8 20H10V15H6V17L2 13L6 9V11H10V6H8L12 2Z" />
    </Svg>
  )
}

// ─── preview-section icons ───

export function PanelIcon(props: IconProps) {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" />
      <path d="M6 2.5V13.5" />
    </Svg>
  )
}

export function ChatIcon(props: IconProps) {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path d="M13.5 2H2.5a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1H5l2.5 2.5L10 11.5h3.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
    </Svg>
  )
}

// ─── Site / download icons ───

export function GithubIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 1049 1024" fill="none" className={className}>
      <path
        d="M524.979332 0C234.676191 0 0 234.676191 0 524.979332c0 232.068678 150.366597 428.501342 358.967656 498.035028 26.075132 5.215026 35.636014-11.299224 35.636014-25.205961 0-12.168395-0.869171-53.888607-0.869171-97.347161-146.020741 31.290159-176.441729-62.580318-176.441729-62.580318-23.467619-60.841976-58.234462-76.487055-58.234463-76.487055-47.804409-32.15933 3.476684-32.15933 3.476685-32.15933 53.019436 3.476684 80.83291 53.888607 80.83291 53.888607 46.935238 79.963739 122.553122 57.365291 152.97411 43.458554 4.345855-33.897672 18.252593-57.365291 33.028501-70.402857-116.468925-12.168395-239.022047-57.365291-239.022047-259.012982 0-57.365291 20.860106-104.300529 53.888607-140.805715-5.215026-13.037566-23.467619-66.926173 5.215027-139.067372 0 0 44.327725-13.906737 144.282399 53.888607 41.720212-11.299224 86.917108-17.383422 131.244833-17.383422s89.524621 6.084198 131.244833 17.383422C756.178839 203.386032 800.506564 217.29277 800.506564 217.29277c28.682646 72.1412 10.430053 126.029806 5.215026 139.067372 33.897672 36.505185 53.888607 83.440424 53.888607 140.805715 0 201.64769-122.553122 245.975415-239.891218 259.012982 19.121764 16.514251 35.636014 47.804409 35.636015 97.347161 0 70.402857-0.869171 126.898978-0.869172 144.282399 0 13.906737 9.560882 30.420988 35.636015 25.205961 208.601059-69.533686 358.967656-265.96635 358.967655-498.035028C1049.958663 234.676191 814.413301 0 524.979332 0z"
        fill="var(--color-bg-inverse)"
      />
    </svg>
  )
}

export function DownloadIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" fill="none" className={className}>
      <path
        d="M849.124134 704.896288c-1.040702 3.157923-17.300015 59.872622-57.250912 118.190843-34.577516 50.305733-70.331835 101.018741-126.801964 101.909018-55.532781 0.976234-73.303516-33.134655-136.707568-33.134655-63.323211 0-83.23061 32.244378-135.712915 34.110889-54.254671 2.220574-96.003518-54.951543-130.712017-105.011682-70.934562-102.549607-125.552507-290.600541-52.30118-416.625816 36.040844-63.055105 100.821243-103.135962 171.364903-104.230899 53.160757-1.004887 103.739712 36.012192 136.028093 36.012192 33.171494 0 94.357018-44.791136 158.90615-38.089503 27.02654 1.151219 102.622262 11.298324 151.328567 81.891102-3.832282 2.607384-90.452081 53.724599-89.487104 157.76107C739.079832 663.275355 847.952448 704.467523 849.124134 704.896288M633.69669 230.749408c29.107945-35.506678 48.235584-84.314291 43.202964-132.785236-41.560558 1.630127-92.196819 27.600615-122.291231 62.896492-26.609031 30.794353-50.062186 80.362282-43.521213 128.270409C557.264926 291.935955 604.745311 264.949324 633.69669 230.749408"
        fill="currentColor"
      />
    </svg>
  )
}
