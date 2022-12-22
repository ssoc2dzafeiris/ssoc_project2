<script>
            
            function SurfaceCalculator () {
                
                // αρχικοποιήση των μεταβλητών των πλευρών με τις αντιστοιχές τιμές από τα πεδία εισαγωγής από το χρήστη
                // αφού μετατρέψω από string μορφή σε int τα δεδομένα.
                let a = parseInt (document.getElementById ('sideA').value);
                let b = parseInt (document.getElementById ('sideB').value);
                let c = parseInt (document.getElementById ('sideC').value);

                
                // έλεγχος αν είναι κένα τα πεδία 
                CheckNull(a);
                CheckNull(b);
                CheckNull(c);
                
                // υπολογισμός της ημιπεριμέτρου του τριγώνου με τον αντιστοιχό μαθηματικό τύπο
                let semiperimeter= (a + b + c) / 2;
                // υπολογισμός του εμβαδού του τριγώνου με τον αντιστοιχό μαθηματικό τύπο
                let ginomeno = (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c);
                let emvadon = Math.sqrt (semiperimeter * ginomeno);

                // στρογγυλοποίηση των αποτελεσμάτων
                let em = emvadon.toFixed(2);
                let se = semiperimeter.toFixed(2);
                
                // παρουσίαση των απολετεσμάτων στην ιστοσελίδα μας στις αντίστοιχες θέσεις
                document.getElementById ('success').innerHTML = `👏Συγχαρητήρια`;
                document.getElementById ('surface').innerHTML = em ;
                document.getElementById ('semiperimeter').innerHTML = se;

                //έπειτα από 5 δευτερόλεπτα, θα κάνω reset αυτόματα σε όλα τα ενδιαφερόμενα πεδία για να ξεκινήσω από την αρχή
                setTimeout(resetFunction, 5000);
              }

              // Δημιουργία επιπλέον function για τον έλεγχο καθέ πεδίου εισαγωγής δεδομένων
              // Αν τυχόν είναι κενά και να ενημερώνει τον χρήστη για τυχόν μη συμπλήρωση όλων των πεδίων
              function CheckNull(parametros) {
                if ((parametros == "") || Number.isNaN(parametros)){
                   alert("Παρακαλώ σημπληρώστε όλα τα πεδία");
                   return false;
                }
              }
              
              // Δημιουργία επιπλέον function για την "επαναφορά" στην αρχική μορφή της ιστοσελίδας
              // Ουσιαστικά θέτονται ολά τα πεδία με το κενό δηλαδή χωρίς τιμή.
              const resetFunction = function ClearFields() {
                document.getElementById ('sideA').value="";
                document.getElementById ('sideB').value="";
                document.getElementById ('sideC').value="";
                document.getElementById ('success').innerHTML ="";
                document.getElementById ('surface').innerHTML ="";
                document.getElementById ('semiperimeter').innerHTML ="";
              }
 
        </script>