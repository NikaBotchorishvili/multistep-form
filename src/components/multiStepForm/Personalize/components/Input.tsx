import { ErrorType } from "../../../../Context/Types";
type Props = {
    name: string;
    error: ErrorType;
    value: string;
    placeholder: string;
    type: string;
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

function Input({name, error, value, placeholder, type, handler, label }: Props) {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex justify-between">
				<label className="text-MarineBlue " htmlFor={name}>
					{label}
				</label>
				{error && (
					<small className="text-StrawberryRed font-bold ">
						{error}
					</small>
				)}
			</div>
			<input
				className={`border border-CoolGray p-2 rounded-md ${
					error && "border-StrawberryRed"
				}`}
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={(e) => handler(e)}
			/>
		</div>
	);
}

export default Input;
