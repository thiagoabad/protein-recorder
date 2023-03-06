import React, { useState } from 'react'

type FormProps = {
  onSubmit: (proteinSource: string, quantity: number) => void
};

const AddIntake: React.FC<FormProps> = (props: FormProps) => {
  const [proteinSource, setProteinSource] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(0)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onSubmit(proteinSource, quantity)
    setProteinSource('')
    setQuantity(0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="proteinSource" className="form-label">Protein source name</label>
        <input type="text" className="form-control" id="proteinSource" aria-describedby="proteinSourceHelp" value={proteinSource} onChange={(event) => setProteinSource(event.target.value)} />
        <div id="proteinSourceHelp" className="form-text">Be sure of the subtype. E.g.: Whey Gold Isolate</div>
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">Quantity in grams</label>
        <input type="number" className="form-control" id="quantity" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} />
      </div>
      <button type="submit" className="btn btn-secondary">Submit</button>
    </form>
  );
};

export default AddIntake
