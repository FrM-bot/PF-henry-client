export const SIGN_IN = async (data) => {
  try {
    const {
      photoDNIFront,
      photoDNIReverse,
      ...dataForm

    } = data

    const form = new FormData()
    form.append('data', JSON.stringify(dataForm))
    form.append('images', [...photoDNIFront, ...photoDNIReverse])

    const res = await fetch('http://localhost:4000/api/user/signin', {
      'Content-Type': 'application/json',
      method: 'POST',
      body: JSON.stringify(dataForm)
    })
    const resJSON = await res.json()

    return resJSON
  } catch (error) {
    console.error(error)
  }
}
