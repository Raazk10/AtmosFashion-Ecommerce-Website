export default (Structure) => {
  const { divider, list, documentTypeListItem } = Structure;

  return list()
    .title("Other Document content")
    .showIcons(true)
    .items([
      documentTypeListItem("product"),
      divider(),
      documentTypeListItem("category"),
      divider(),

      documentTypeListItem("tag"),
    ]);
};
