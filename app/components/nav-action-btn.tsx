type Props = React.HTMLAttributes<HTMLButtonElement> & {};

export default function NavActionBtn({ className, ...props }: Props) {
    return <button className={`text-gray-400 text-xl hover:text-gray-800 active:text-gray-800 focus:text-gray-800 ${className}`} {...props} />;
}
