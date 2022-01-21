import { ChangeEvent, RefObject } from 'react';

export const handleFileChange =
	(
		i: number,
		imageRef: RefObject<HTMLImageElement>,
		inputRef: RefObject<HTMLInputElement>,
		setImage: (index: number, imageFile: File | undefined) => Promise<void>,
	) =>
	async (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target;
		if (!imageRef.current) return;
		if (!input.files || !input.files[0]) {
			await setImage(i, undefined);
			return;
		}
		const img = imageRef.current;
		const imageFile = input.files[0];
		const fileReader = new FileReader();
		fileReader.onload = async () => {
			img.src = fileReader.result as string;
			img.width = 300;
			await setImage(i, imageFile);
		};
		fileReader.readAsDataURL(imageFile);
	};