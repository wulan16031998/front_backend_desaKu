import React,{useState} from "react";
import { Helmet } from "react-helmet";
import { Button } from "./../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export const Register = () => {
    const [namaReg, setNamaReg]=useState('');
    const [nikkReg, setNikkReg]=useState('');
    const [alamatKtpReg, setAlamatKtpReg]=useState('');
    const [pekerjaanReg, setPekerjaanReg]=useState('');
    const [jenisKelaminReg, setJenisKelaminReg]=useState('');
    const [contactReg, setContactReg]=useState('');
    const [emailReg, setEmailReg]=useState('');
    const [passwordReg, setPasswordReg]=useState('');
    const [confirmPasswordReg, setConfirmPasswordReg]=useState('');
    const [msg,setmsg]= useState('');
    const navigate =useNavigate();

    const Daftar = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/auth/register',{
                nama : namaReg,
                nikk : nikkReg,
                alamatKtp: alamatKtpReg,
                pekerjaan: pekerjaanReg,
                jenisKelamin: jenisKelaminReg,
                contact : contactReg,
                email: emailReg,
                password: passwordReg,
                confirmPassword: confirmPasswordReg,
                
            }, console.log(Daftar))

           navigate("/login");
        } catch (error) {
            if(error.response)
            console.log(error.response.data)
        }
    }

return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="grid grid-cols-2 mb-2 ">
        <div className="bg-loginpic h-auto">
          <Link to="/" className="p-4 text-white text-3xl bg-[#29b2ff] ">
            ←
          </Link>
        </div>
        <div className="m-auto">
          <h1 className="text-4xl pb-5 font-bold text-[#29b2ff] text-center">Register</h1>
          <form  className="grid grid-rows-3 gap-4 w-80 h-90">
            <input type="text" name="name" className="border-solid border-2 radius p-2 rounded-md" placeholder="Username" value={namaReg} onChange={(e) => {setNamaReg(e.target.value);}}/>
            <input type="text" name="name" className="border-solid border-2 radius p-2 rounded-md" placeholder="nomor induk kartu keluarga" value={nikkReg} onChange={(e) => { setNikkReg(e.target.value);}}/>
            <input type="text" name="name" className="border-solid border-2 radius p-2 rounded-md" placeholder="alamat KTP" value={alamatKtpReg} onChange={(e) => {setAlamatKtpReg(e.target.value);}}/>
            <input type="text" name="name" className="border-solid border-2 radius p-2 rounded-md" placeholder="Pekerjaan" value={pekerjaanReg} onChange={(e) => {setPekerjaanReg(e.target.value);}} />
            <input type="text" name="name" className="border-solid border-2 radius p-2 rounded-md" placeholder="jenis kelamin" value={jenisKelaminReg} onChange={(e) => {setJenisKelaminReg(e.target.value);}} />
            <input type="text" name="name" className="border-solid border-2 radius p-2 rounded-md" placeholder="Contact" value={contactReg} onChange={(e) => {setContactReg(e.target.value);}}/>
            <input type="text" name="name" className="border-solid border-2 radius p-2 rounded-md" placeholder="email" value={emailReg} onChange={(e) =>{ setEmailReg(e.target.value);}} />
            <input type="password" name="name" className="border-solid border-2 p-2 rounded-md" placeholder="Password" value={passwordReg} onChange={(e) => {setPasswordReg(e.target.value);}}/>
            <input type="password" name="name" className="border-solid border-2 p-2 rounded-md" placeholder="Confirm Password" value={confirmPasswordReg} onChange={(e) => {setConfirmPasswordReg(e.target.value);}}/>
            
            <Button text="Daftar" onClick={Daftar} />
          </form>
        </div>
      </div >
    </>
  );
};

