function SectionHeader(props: any) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl md:text-2xl font-semibold">{props.heading}</h2>
      <hr className="border-t-2" />
    </div>
  );
}

export default SectionHeader;
