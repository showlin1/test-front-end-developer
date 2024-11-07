
const AttachmentForm = () => {
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target
        const file = form.file.value;
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='file' className='block mb-2 text-sm'>
                        Select File:
                    </label>
                    <input
                        required
                        type='file'
                        id='file'
                        name='file'
                        accept='file/*'
                    />
                </div>
                <div>
                    <label htmlFor='file' className='block mb-2 text-sm'>
                        Select File:
                    </label>
                    <input
                        required
                        type='file'
                        id='file'
                        name='file'
                        accept='file/*'
                    />
                </div>
                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    Upload
                </button>
            </form >
        </div >
    );
};

export default AttachmentForm;