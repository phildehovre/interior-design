export const unsortedImages = [
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175192/Portfolio%20-%202024/Interior/kensington4_jwmlsn.jpg",
    description: "kensington",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175190/Portfolio%20-%202024/Interior/stockholm2_jafzjo.jpg",
    description: "stockholm",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175188/Portfolio%20-%202024/Interior/santorini13_okmq2c.jpg",
    description: "santorini",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175186/Portfolio%20-%202024/Interior/kensington2_cfrfux.jpg",
    description: "kensington",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175184/Portfolio%20-%202024/Interior/kensington3_dtrymj.jpg",
    description: "kensington",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175182/Portfolio%20-%202024/Interior/kensington5_z9ymas.jpg",
    description: "kensington",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175180/Portfolio%20-%202024/Interior/hollywood7_fbb7je.jpg",
    description: "hollywood",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175178/Portfolio%20-%202024/Interior/hollywood5_npffwk.jpg",
    description: "hollywood",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175176/Portfolio%20-%202024/Interior/cotswolds3_ilkcnd.jpg",
    description: "cotswolds",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175174/Portfolio%20-%202024/Interior/hollywood_kqbkqu.jpg",
    description: "hollywood",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175172/Portfolio%20-%202024/Interior/cotswolds2_bacfyz.jpg",
    description: "cotswolds",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175170/Portfolio%20-%202024/Interior/cotswolds4_tl9fet.jpg",
    description: "cotswolds",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175168/Portfolio%20-%202024/Interior/cotswolds1_ygxy1f.jpg",
    description: "cotswolds",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175166/Portfolio%20-%202024/Interior/stockholm4_nxdbvz.jpg",
    description: "stockholm",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175164/Portfolio%20-%202024/Interior/santorini1_z4zuyk.jpg",
    description: "santorini",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175162/Portfolio%20-%202024/Interior/santornii_ezubpb.jpg",
    description: "santorini",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175161/Portfolio%20-%202024/Interior/stockholm3_muw5fi.jpg",
    description: "stockholm",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175159/Portfolio%20-%202024/Interior/santorini2_xwpibf.jpg",
    description: "santorini",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175157/Portfolio%20-%202024/Interior/stockholm1_mhz0pv.jpg",
    description: "stockholm",
  },
  {
    src: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1713175156/Portfolio%20-%202024/Interior/hollywood4_w5eb10.jpg",
    description: "hollywood",
  },
];

const sorted = unsortedImages.sort((a, b) => {
  if (a.description < b.description) return -1;
  if (a.description > b.description) return 1;
  return 0;
});

export const sortedImages = sorted;
