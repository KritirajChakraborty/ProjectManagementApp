export default function Button({children,onChange,}){
    let classes = 'px-4 py-2 text-xs md:text-base rounded-md bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-gray-100'
 return (
    <button className={classes} onClick={onChange}>{children}</button>
 )
}