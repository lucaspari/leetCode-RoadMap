export default function isAnagram(s : string, t : string) {
    s = s.split("").sort().toString();
    t = t.split("").sort().toString();
    return s == t;  
};