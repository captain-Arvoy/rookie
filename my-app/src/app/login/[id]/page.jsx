export default function page({ params }){
  return(
    <div className="bg-slate-300 text-xl p-8 m-4 text-slate-900"> 
      Hello👋,
      <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
        <span class="relative text-white ">{params.id}</span>
      </span>
      </div>
  )
}
