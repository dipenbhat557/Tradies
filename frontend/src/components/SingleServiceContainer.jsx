function SingleServiceContainer() {
  return (
    <div className="flex bg-slate-700 text-white h-96 ">
      <section>
        <h2 className="font-bold pt-20 pl-20 text-4xl">Laser Hair Reduction</h2>
        <h3 className="px-20 mt-5">Trial session starting from $999 </h3>
        <button className=" m-20   mt-24  p-3 rounded-lg  bg-blue-500">Book Now </button>
      </section>
      <section className="">
        <img
          src="https://img.freepik.com/free-photo/woman-washing-head-hairsalon_1157-27179.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697155200&semt=ais"
          className=" pl-96 ml-72 p-4 h-96 rounded-lg"
        />
      </section>
    </div>
  );
}

export default SingleServiceContainer;
